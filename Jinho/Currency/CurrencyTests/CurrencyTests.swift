//
//  CurrencyTests.swift
//  CurrencyTests
//
//  Created by jinho on 2021/12/13.
//

import XCTest
@testable import Currency

class CurrencyTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }
    
    func testMultiplication() throws {
        let five = Money.dollar(5)
        XCTAssertEqual(Money.dollar(10), five.times(2))
        XCTAssertEqual(Money.dollar(15), five.times(3))
    }
    
    func testEqual() throws {

        XCTAssertTrue(Money.dollar(5) == Money.dollar(5))
        XCTAssertFalse(Money.dollar(5) == Money.dollar(6))
        XCTAssertFalse(Money.dollar(5) == Money.franc(5))
    }
    
    func testFrancMultiplication() throws {
        let five = Money.franc(5)
        XCTAssertEqual(Money.franc(10), five.times(2))
        XCTAssertEqual(Money.franc(15), five.times(3))
    }
    
    func testCurrency() throws {
        XCTAssertEqual("USD", Money.dollar(1).currency)
        XCTAssertEqual("CHF", Money.franc(1).currency)
    }
    
    func testDifferentClassEquality() throws{
        XCTAssertEqual(Money(10, "CHF"), Franc(10, "CHF"))
    }

//    func testMultiplication() throws {
//        let five = Dollar(5)
//        XCTAssertEqual(Dollar(10), five.times(2))
//        XCTAssertEqual(Dollar(15), five.times(3))
//    }
//
//    func testFrancMultiplication() throws {
//        let five = Franc(5)
//        XCTAssertEqual(Franc(10), five.times(2))
//        XCTAssertEqual(Franc(15), five.times(3))
//    }
//
//    func testEqual() throws {
//
//        XCTAssertTrue(Dollar(5) == Dollar(5))
//        XCTAssertFalse(Dollar(5) == Dollar(6))
//
//        XCTAssertTrue(Dollar(5).equals(money: Dollar(5)))
//        XCTAssertFalse (Dollar(5).equals(money: Dollar(6)))
//    }
//
//    func testFrancEqual() throws {
//
//        XCTAssertTrue(Franc(5) == Franc(5))
//        XCTAssertFalse(Franc(5) == Franc(6))
//
//        XCTAssertTrue(Franc(5).equals(money: Franc(5)))
//        XCTAssertFalse (Franc(5).equals(money: Franc(6)))
//    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

}
