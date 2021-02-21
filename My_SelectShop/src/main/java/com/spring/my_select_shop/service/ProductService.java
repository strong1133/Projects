package com.spring.my_select_shop.service;

import com.spring.my_select_shop.domain.Product;
import com.spring.my_select_shop.domain.ProductMypriceRequestDto;
import com.spring.my_select_shop.domain.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    @Transactional
    public Long update(Long id, ProductMypriceRequestDto productMypriceRequestDto){
        Product product = productRepository.findById(id).orElseThrow(
                ()-> new IllegalArgumentException("해당 아이디가 없습니다.")
        );
        product.update(productMypriceRequestDto);
        return product.getId();
    }
}
