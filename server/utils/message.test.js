var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
it('should generate the correct message object',() => {

    var res = generateMessage('Paulius','aloha')

        expect(res).toMatchObject({
            from: 'Paulius',
            text: 'aloha'
        })
        expect(typeof res.createdAt).toBe('number')
})

})

describe('generateLocationMessage', () => {

    it('should generate correct url with longitute and latitude',() => {
        var from = 'Agurkelis'
        var lat = 1;
        var lng = 1;
        var url = `https://www.google.com/maps?q=1,1`

        var result = generateLocationMessage(from,lat,lng)

        expect(result).toMatchObject({
            from,
            url
        })
        expect(typeof result.createdAt).toBe('number')

    })

})