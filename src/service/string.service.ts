import { IDuplicateLetterResponse } from "../models/i-duplicate-letter-response";

export class StringService {

    public calculateDuplicateLetters(input: string): IDuplicateLetterResponse {
        const char: string[] = input.split('');

        return char.reduce((finalResponse: IDuplicateLetterResponse, letter: string) => {
            finalResponse[letter] ? finalResponse[letter]++ : finalResponse[letter] = 1;
            return finalResponse;
        }, {});
    }
}