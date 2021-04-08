import {createContainer, asValue, asClass, asFunction} from "awilix";
import { containerController} from './controller.container';
import {containerApplication} from './application.container';
import {containerService} from './service.container';
import {containerRepository} from './repository.container';
import {containerEntity} from './entity.container';
import {containerRoutes} from './routes.container';

import config from '../../config';
import app from './';
import routes from '../../4.ui/routes'

const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    config: asValue(config),
    router: asFunction(routes).singleton()
});

containerController(container);
containerApplication(container);
containerService(container);
containerRepository(container);
containerEntity(container);
containerRoutes(container);

export = container;