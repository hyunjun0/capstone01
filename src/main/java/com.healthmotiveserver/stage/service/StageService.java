package com.healthmotiveserver.stage.service;

//추가

import com.healthmotiveserver.entity.User;
import com.healthmotiveserver.handler.StageHandler;
import com.healthmotiveserver.handler.UserHandler;
import com.healthmotiveserver.repository.UserRepository;
import com.healthmotiveserver.response.status.ErrorStatus;
import com.healthmotiveserver.stage.dto.StageRequestDto;
import com.healthmotiveserver.stage.dto.StageResponseDto;
import com.healthmotiveserver.stage.entity.Stage;
import com.healthmotiveserver.stage.repository.StageRepository;
import com.healthmotiveserver.util.SecurityUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class StageService {

    private final StageRepository stageRepository;
    private final UserRepository userRepository;

    public StageResponseDto getStage(StageRequestDto stageRequestDto){
        String username = String.valueOf(SecurityUtil.getCurrentUsername());
        User user = userRepository.findOneWithAuthoritiesByUsername(username)
                .orElseThrow(()-> new UserHandler(ErrorStatus._UNAUTHORIZED));
        Stage stage = stageRepository.findByStagenumberandUser(stageRequestDto.getStagenumber()
                ,user).orElseThrow(()-> new StageHandler(ErrorStatus.STAGE_NOT_EXIST));


        return StageResponseDto.from(stage);

    }




}
