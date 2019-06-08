package com.start.react.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * @작성자 :   jdy
 */

@Data
@Getter
@Setter
public class TempModel {

    private int no;
    private String id;
    private String name;
    private String level;
    private String auth;
}
