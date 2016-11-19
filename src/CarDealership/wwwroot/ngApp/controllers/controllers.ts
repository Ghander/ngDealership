namespace CarDealership.Controllers {


    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;

        constructor(movieService:CarDealership.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }

    export class CarsController {
        public cars;
        public makes;
        public search;
        public makeId: number;

        carId(id) {
            this.makeId = id;
        }

        showModal(car) {
            this.$uibModal.open({
                templateUrl: 'ngApp/views/details.html',
                controller: 'modalController',
                controllerAs: 'modal',
                resolve: {
                    car: () => {
                        console.log(car);
                        return car;
                    }
                },
                size: 'lg'
            });

        }
        constructor(private $http: ng.IHttpService, private $uibModal: angular.ui.bootstrap.IModalService) {
            this.$http.get('/api/cars')
                .then(response => {
                    this.cars = response.data;
                    console.log(this.cars);
                })
                .catch(response => {
                    console.log(response);
                })
            this.$http.get('/api/makes')
                .then(response => {
                    this.makes = response.data;
                    console.log(this.makes);
                })
                .catch(response => {
                    console.log(response);
                })
        }
    }
    class ModalController {
        public close() {
            this.$uibModalInstance.close();
        }
        constructor(public car, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

        }
    }
    angular.module('CarDealership').controller('modalController', ModalController);

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
