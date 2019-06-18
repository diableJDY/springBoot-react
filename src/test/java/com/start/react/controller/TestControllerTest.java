package com.start.react.controller;

import com.start.react.model.TempModel;
import com.start.react.util.CommonUtil;
import org.junit.Test;

import java.util.Map;

import static org.junit.Assert.*;

public class TestControllerTest {

    @Test
    public void test(){
        TempModel tempModel = new TempModel();
        Map<String,Object> map = CommonUtil.ConverObjectToMap(tempModel);

        System.out.println(map);
    }

}