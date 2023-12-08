package com.healthmotiveserver.handler;
//추가추가
import com.healthmotiveserver.response.BaseErrorCode;

public class UserHandler extends GeneralException {
    public UserHandler(BaseErrorCode code) {
        super(code);
    }
}
