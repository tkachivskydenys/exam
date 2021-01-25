
(function () {
    'use strict';

    angular.module('exam', [])
        .controller('toBuyController', ToBuyController)
        .controller('boughtController', BoughtController)
        .service('itemsService', ItemsService);
    ToBuyController.$inject = ['itemsService'];
    function ToBuyController(service) {
        var controller = this;
        controller.toBuyItems = service.getToBuyItems();

        controller.addToBought = function (itemIndex) { 
          service.addBoughtItem(itemIndex);
        }
        controller.hideToBought = function(itemIndex){
          service.hideBoughtItem(itemIndex);

        }
    };

    BoughtController.$inject = ['itemsService'];
    function BoughtController(service) {
        var controller = this;
        controller.boughtItems = service.getBoughtItems();
    };

    function ItemsService() {
        var service = this;

        var boughtItems = [];

        var toBuyItems = [
            new Item('Mercedes', 2),
            new Item('BMW', 5),
            new Item('Audi', 4),
            new Item('Porsche', 1),
            new Item('Zaporozhets', 250)
        ];

        service.addBoughtItem = function (shopItemId) {
            toBuyItems.splice(shopItemId, 1);
            console.log(shopItemId,toBuyItems[shopItemId].name)
            
        };

        service.hideBoughtItem = function (itemIndex){
          var hidding=new Item(toBuyItems[itemIndex].name,toBuyItems[itemIndex].amount)
          toBuyItems.splice(itemIndex, 1);
          toBuyItems.push(hidding)
          
        }

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    };


    class Item {
        constructor(name, amount) {
            this.name = name;
            this.amount = amount;
        };
    };

})();
