namespace CarDealership.Services {
    export class CarsService {
        public cars;
        public makes;
        public deferred;
        carsList() {
     
        }
        makesList() {
          
            return this.makes;
        }
        constructor(private $http: ng.IHttpService, $q) {
            this.deferred = $q.defer();
        }
    }
    angular.module('CarDealership').service('CarsService', CarsService);

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('CarDealership').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('CarDealership').service('myService', MyService);
    }
