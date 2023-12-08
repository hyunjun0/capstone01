package com.healthmotiveserver.stage.dto;


import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class StageRequestDto { //user가 있고, stage단계를 보내주면

    @NotNull
    Long stagenumber;
}
