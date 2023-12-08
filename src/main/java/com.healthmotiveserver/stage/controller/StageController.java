package com.healthmotiveserver.stage.controller;
//추가

import com.healthmotiveserver.response.ApiResponse;
import com.healthmotiveserver.response.status.SuccessStatus;
import com.healthmotiveserver.stage.dto.StageRequestDto;
import com.healthmotiveserver.stage.service.StageService;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/stage")
public class StageController {
    private final StageService stageService;

    @GetMapping("/stagenumber")
    public ApiResponse getStage(@RequestParam Long stagenumber){
        StageRequestDto stageRequestDto = StageRequestDto.builder().stagenumber(stagenumber).build();
        return ApiResponse.of(SuccessStatus.GET_STAGE_SUCCESS, stageService.getStage(stageRequestDto));


    }


}
