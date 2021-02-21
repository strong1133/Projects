package com.spring.my_select_shop.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class Product extends Timestamped{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false)
    private String link;
    @Column(nullable = false)
    private int lprice;
    @Column(nullable = false)
    private int myprice;

    public Product(ProductRequestDto productRequestDto){
        this.title = productRequestDto.getTitle();
        this.image = productRequestDto.getImage();
        this.link = productRequestDto.getLink();
        this.lprice = productRequestDto.getLprice();
        this.myprice=0;
    }
    public void update(ProductMypriceRequestDto productMypriceRequestDto){
        this.myprice = productMypriceRequestDto.getMyprice();
    }
}
