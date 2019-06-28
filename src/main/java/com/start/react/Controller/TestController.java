package com.start.react.Controller;


import com.start.react.mapper.TempMapper;
import com.start.react.model.TempModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class TestController {

    @Autowired
    private TempMapper tempMapper;

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

    @RequestMapping(value = "/test/java")
    public List<TempModel> whyJava(){

        List<TempModel> tempLists = tempMapper.getTempList();
        return tempLists;

    }

}
