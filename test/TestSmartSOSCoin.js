var SOSCoin = artifacts.require("./SmartSOSCoin.sol");

contract('SOSCoin', function (accounts) {
    let coin = null;
    beforeEach(async () => {
        coin = await SOSCoin.new();
    })
    
    describe('Testing Smart SOS Contract', () => {
        it('should have a function', async () => {
        })
    });

    describe('Testing GDO funding', () => {
        it('should sends funds', async () => {
            
        })
    })
});