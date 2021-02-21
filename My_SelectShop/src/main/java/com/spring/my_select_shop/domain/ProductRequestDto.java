package com.spring.my_select_shop.domain;

import lombok.Getter;

@Getter
public class ProductRequestDto {
    private String title;
    private String image;
    private String link;
    private int lprice;
}
