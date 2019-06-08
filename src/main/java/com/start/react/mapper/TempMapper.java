package com.start.react.mapper;

import com.start.react.model.TempModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @작성자 :   jdy
 */

@Mapper
public interface TempMapper {
    List<TempModel> getTempList();
}
