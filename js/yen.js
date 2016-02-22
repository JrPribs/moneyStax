angular.module('howMuch', ['moneyRenderer'])
    .controller('moneyCtrl', function($scope, MoneyService, RenderService) {
        $scope.yens = MoneyService.yens;
        RenderService();
    })
    .factory('MoneyService', function() {
        var service = {
            moneyOpts: {
                coins: {
                    
                },
                bills: {
                    us: {}
                }
            },
            yens: [{
                "size": "76×160mm",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/bn_10000f_e.jpg",
                "image2": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/bn_10000b_e.jpg",
                "denomination": "10,000 yen"
            },
            {
                "size": "76×156mm",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/bn_5000f_e.jpg",
                "image2": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/bn_5000b_e.jpg",
                "denomination": "5,000 yen"
            },
            {
                "size": "76×154mm",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/bn_2000f_d.jpg",
                "image2": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/bn_2000b_d.jpg",
                "denomination": "2,000 yen"
            },
            {
                "size": "76×150mm",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/bn_1000f_e.jpg",
                "image2": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/bn_1000b_e.jpg",
                "denomination": "1,000 yen"
            },
            {
                "size": "Diameter : 26.5mm",
                "weight": "Weight : 7.0g",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_500_02.jpg",
                "denomination": "500yen Nickel-brass Coin"
            },
            {
                "size": "Diameter : 22.6mm",
                "weight": "Weight : 4.8g",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_100f_03.jpg",
                "image2": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_100b_03.jpg",
                "denomination": "100yen Cupro-nickel Coin"
            },
            {
                "size": "Diameter : 21.0mm",
                "weight": "Weight : 4.0g",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_50f_03.jpg",
                "image2": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_50b_03.jpg",
                "denomination": "50yen Cupro-nickel Coin"
            },
            {
                "size": "Diameter : 23.5mm",
                "weight": "Weight : 4.5g",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_10f_02.jpg",
                "image2": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_10b_02.jpg",
                "denomination": "10yen Bronze Coin"
            },
            {
                "size": "Diameter : 22.0mm",
                "weight": "Weight : 3.75g",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_5f_03.jpg",
                "image2": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_5b_03.jpg",
                "denomination": "5yen Brass Coin"
            },
            {
                "size": "Diameter : 20.0mm",
                "weight": "Weight : 1.0g",
                "image1": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_1f_01.jpg",
                "image2": "https://www.boj.or.jp/en/note_tfjgs/note/valid/img/coin_1b_01.jpg",
                "denomination": "1yen Aluminum Coin"
            }]
        };
        return service;
    });