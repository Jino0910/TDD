//
//  Dollar.swift
//  Currency
//
//  Created by jinho on 2021/12/13.
//

import Foundation

class Dollar: Money {
    
    override init(_ amount: Int,
                  _ currency: String) {
        super.init(amount, currency)
    }
    
    override func times(_ multiplier: Int) -> Money {
        Dollar(amount * multiplier, currency)
    }
}
