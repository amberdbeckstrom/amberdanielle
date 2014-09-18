angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'img/impact1.jpg', 
             image2: 'img/impact2.jpg',
             image3: 'img/impact3.jpg',
             description: 'Created a new brand called impact. It is a brand of shoe made specifically for athletes. Designed all of the branding and created a couple pages of the website.',
             title: "Impact",
             date: "2013"
        },

            {image: 'img/indy1.jpg', 
             image2: 'img/indy2.jpg',
             description: 'A tastey greek pizza with lots of sauce, red peppers, olives, basil, feta cheese, sun dried tomatoes.',
             title: "Indy",
             date: "2012"
        },
       
        ];


        $scope.direction = 'left';
        $scope.currentIndex = 1;

        // $('.indy').on("click", function(e){
        // $scope.currentIndex = 0;
        // });

 

        // $scope.indy = function () {
        //     $scope.direction = 'left';
        //     $scope.currentIndex = 1;
        // };
     
   


        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
    .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };

});

