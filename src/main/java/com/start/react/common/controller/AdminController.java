package com.start.react.common.controller;


import com.start.react.mapper.TempMapper;
import com.start.react.model.TempModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @작성자 :   jdy
 */

@Controller
public class AdminController {

    @Value("${property.message}")
    private String propertyHello;

    @Autowired
    private TempMapper tempMapper;

    @RequestMapping(path = "/test")
    @ResponseBody
    public List<TempModel> test() {

        List<TempModel> tempLists = tempMapper.getTempList();
        System.out.println(propertyHello + "테스트");
        return tempLists;

    }
}
