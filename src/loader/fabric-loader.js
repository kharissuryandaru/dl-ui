import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const resource = 'finishing-printing/quality-control/fabrics';

module.exports = function(keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("production");

    return endpoint.find(resource, { keyword: keyword, filter: JSON.stringify(filter) })
        .then(results => {
            return results.data
        });
}