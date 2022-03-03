//
//  Money.swift
//  Currency
//
//  Created by jinho on 2021/12/26.
//

import Foundation

class Money: Equatable {
    static func == (lhs: Money, rhs: Money) -> Bool {
        lhs.amount == rhs.amount &&
        lhs.currency == rhs.currency
    }
    var amount: Int
    var currency: String
    
    init(_ amount: Int,
         _ currency: String) {
        self.amount = amount
        self.currency = currency
    }
    
    func equals(money: Money) -> Bool {
        amount == money.amount &&
        self.currency == money.currency
    }
    
    func times(_ multiplier: Int) -> Money {
        Money(amount * multiplier, currency)
    }
    
    static func dollar(_ amount: Int) -> Money {
        Dollar(amount, "USD")
    }
    
    static func franc(_ amount: Int) -> Money {
        Franc(amount, "CHF")
    }
    
    public func toString() -> String {
        return "\(amount)" + "  " + "\(currency)"
    }
}
