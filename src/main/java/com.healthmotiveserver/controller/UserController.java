package com.healthmotiveserver.controller;

import com.healthmotiveserver.dto.UserDto;
import com.healthmotiveserver.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("hello");
    }

    @PostMapping("/test-redirect")
    public void testRedirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/api/user");
    }

    @PostMapping("/signup")//회원가입
    public ResponseEntity<UserDto> signup(
            @Valid @RequestBody UserDto userDto
    ) {
        return ResponseEntity.ok(userService.signup(userDto));
    }

    @GetMapping("/user")       //이 api는 그냥 일반 유저들의 토큰으로 호출 가능
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public ResponseEntity<UserDto> getMyUserInfo(HttpServletRequest request) {
        return ResponseEntity.ok(userService.getMyUserWithAuthorities());
    }

    @GetMapping("/user/{username}")         //get으로 admin권한을 가지고 있는 사람은 일반유저들 정보를 가져올 수 있음
    @PreAuthorize("hasAnyRole('ADMIN')")        //한마디로 일반적으로 회원가입해서 그사람이 가지고 있는 토큰은 이 api사용할 수 없음
    public ResponseEntity<UserDto> getUserInfo(@PathVariable String username) {
        return ResponseEntity.ok(userService.getUserWithAuthorities(username));
    }
}


//https://bcrypt-generator.com/ 이 사이트에서 문자열과 admin같다고 나와서 미리 그 비밀번호를 데이터베이스에 입력할 수 있었던 것임.
