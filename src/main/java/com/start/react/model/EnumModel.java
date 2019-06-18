package com.start.react.model;

public enum  EnumModel {

    Y("1", true),
    N("0", false);

    private String key1 ;
    private boolean key2 ;
    EnumModel(String key1, boolean key2) {
        this.key1 = key1;
        this.key2 = key2;
    }

    public String getKey1() {
        return key1;
    }

    public boolean isKey2() {
        return key2;
    }
}
