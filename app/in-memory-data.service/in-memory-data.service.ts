export class InMemoryDataService {
    createDb() {
        let heroes = [{
            id: 1,
            name: 'FAC-1',
            hexid: '64616e6765727a6f6e65',
            base64id: 'NjQ2MTZlNjc2NTcyN2E2ZjZlNjU=',
            authority: 'Facebook',
            priority: 0,
            contactDetails: ['fac1@fail.com', 'aguy@facebook.com', 'a.n.otherguy@facebook.com']
        }, {
                id: 2,
                name: 'FAC-2',
                hexid: '64616e6765727a6f6e65',
                base64id: 'NjQ2MTZlNjc2NTcyN2E2ZjZlNjU=',
                authority: 'Facebook',
                priority: 1,
                contactDetails: ['fac2@fail.com', 'aguy@facebook.com', 'a.n.otherguy@facebook.com']
            }, {
                id: 3,
                name: 'FAC-3',
                hexid: '64616e6765727a6f6e65',
                base64id: 'ZGFuZ2Vyem9uZQ==',
                authority: 'Facebook',
                priority: -1,
                contactDetails: ['fac3@fail.com', 'aguy@facebook.com', 'a.n.otherguy@facebook.com']
            }, {
                id: 4,
                name: 'TW-1',
                hexid: '4f6e6520776f72642e2e2e4a6566667374657221',
                base64id: 'T25lIHdvcmQuLi5KZWZmc3RlciE=',
                authority: 'Twitter',
                priority: 2,
                contactDetails: ['tw1@fail.com', 'aguy@twitter.com', 'a.n.otherguy@twitter.com']
            }, {
                id: 5,
                name: 'INS-1',
                hexid: '64616e6765727a6f6e65',
                base64id: 'NjQ2MTZlNjc2NTcyN2E2ZjZlNjU=',
                authority: 'Instagram',
                priority: -1,
                contactDetails: ['ins1@fail.com', 'aguy@instagram.com', 'a.n.otherguy@instagram.com']
            }]
            ;
        return { heroes };
    }
}
