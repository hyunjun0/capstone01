package com.healthmotiveserver.handler;
//추가
import com.healthmotiveserver.response.BaseErrorCode;

public class StageHandler extends GeneralException {
    public StageHandler(BaseErrorCode code) {
        super(code);
    }
}
