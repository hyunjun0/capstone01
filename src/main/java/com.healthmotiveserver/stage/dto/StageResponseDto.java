package com.healthmotiveserver.stage.dto;

import com.healthmotiveserver.stage.entity.Stage;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class StageResponseDto {

    private Long stagenumber;

    private boolean completed;

    public static StageResponseDto from(Stage stage){ //
        return StageResponseDto.builder()
                .stagenumber(stage.getStagenumber())
                .completed(stage.isCompleted())
                .build();

    }

}
