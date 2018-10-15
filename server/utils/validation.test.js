const expect = require('expect')

var {isRealString} = require('./validation')


describe('testStringValidation', () => {
    it('should reject non-string values',() => {
        var res = isRealString(1222)

        expect(res).toBeFalsy()
    })
    it('should reject string with only spaces',() => {
        var result = isRealString('  ')

        expect(result).toBeFalsy()
    })
    it('should reject string with only spaces',() => {
        var result = isRealString('   Paulius Malke')

        expect(result).toBeTruthy()
    })
})