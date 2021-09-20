import * as chai from 'chai'
import { IDuplicateLetterResponse } from "../models/i-duplicate-letter-response";
import { StringService } from "../service/string.service"


const expect = chai.expect;

describe('Count duplicate letter countt', function () {
    const stringService: StringService = new StringService();
    it('shoulld return count ', function () {
        const res: IDuplicateLetterResponse = stringService.calculateDuplicateLetters("aabc");
        expect(res).to.be.an('object');
        expect(res).to.be.eqls({ a: 2, b: 1, c: 1 });
    })

    it('shoulld return emoty result when input is empty ', function () {
        const res: IDuplicateLetterResponse = stringService.calculateDuplicateLetters("");
        expect(res).to.be.an('object');
        expect(res).to.be.eqls({})
    })
})