//
//  Dollar.swift
//  Currency
//
//  Created by jinho on 2021/12/13.
//

import Foundation

class Dollar {
    var amount: Int
    
    init(_ amount: Int) {
        self.amount = amount
    }
    
    func times(_ multiplier: Int) {
        amount *= multiplier
    }
}
