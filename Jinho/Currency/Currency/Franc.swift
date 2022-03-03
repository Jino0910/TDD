//
//  Franc.swift
//  Currency
//
//  Created by jinho on 2021/12/26.
//

import Foundation

class Franc: Money {
    
    override init(_ amount: Int,
                  _ currency: String) {
        super.init(amount, currency)
    }
    
    override func times(_ multiplier: Int) -> Money {
        Franc(amount * multiplier, currency)
    }
}
