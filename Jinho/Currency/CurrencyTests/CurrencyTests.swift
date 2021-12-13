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
        let five = Dollar(5)
        five.times(2)
        XCTAssertEqual(10, five.amount)
    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

}
