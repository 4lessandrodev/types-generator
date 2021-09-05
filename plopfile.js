module.exports = function (plop) {
    plop.setGenerator('resource', {
        prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the module or resource name?'
        },
        {
            type: 'list',
            name: 'option',
            message: 'Select your option?',
            choices:[
                {
                    type: 'confirm',
                    name: 'module',
                    message: 'Do you want Domain Module?'
                },
                {
                    type: 'confirm',
                    name: 'valueObject',
                    message: 'Do you want Aggregate?'
                },
                {
                    type: 'confirm',
                    name: 'aggregate',
                    message: 'Do you want Aggregate?'
                },
                {
                    type: 'confirm',
                    name: 'entity',
                    message: 'Do you want Entity?'
                },
                {
                    type: 'confirm',
                    name: 'useCase',
                    message: 'Do you want Use Case?'
                },
                {
                    type: 'confirm',
                    name: 'mapper',
                    message: 'Do you want Mapper?'
                }
            ]
        }
    ],
        actions: function(data) {
            var actions = [];

            if(data.valueObject) {
                actions.push(
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/value-objects/{{dashCase name}}.value-object.ts',
                        templateFile: 'templates/module/domain/value-objects/value-object.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/value-objects/tests/{{dashCase name}}.value-object.spec.ts',
                        templateFile: 'templates/module/domain/value-objects/tests/value-object.spec.hbs'
                    }
                );
            } else if (data.aggregate) {
                actions.push(
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/aggregates/{{dashCase name}}.aggregate.ts',
                        templateFile: 'templates/module/domain/aggregates/aggregate.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/aggregates/tests/{{dashCase name}}.aggregate.spec.ts',
                        templateFile: 'templates/module/domain/aggregates/tests/aggregate.spec.hbs'
                    }
                );
            } else if (data.entity) {
                actions.push(
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/entities/{{dashCase name}}.entity.ts',
                        templateFile: 'templates/module/domain/entities/entity.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/entities/tests/{{dashCase name}}.entity.spec.ts',
                        templateFile: 'templates/module/domain/entities/tests/entity.spec.hbs'
                    }
                );
            } else if (data.useCase) {
                actions.push(
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.dto.ts',
                        templateFile: 'templates/module/application/use-cases/dto.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.use-case.ts',
                        templateFile: 'templates/module/application/use-cases/use-case.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/application/use-cases/tests/create-{{dashCase name}}.use-case.spec.ts',
                        templateFile: 'templates/module/application/use-cases/tests/use-case.spec.hbs'
                    }
                );
            } else if (data.mapper) {
                actions.push(
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/infra/mappers/tests/{{dashCase name}}.mapper.spec.ts',
                        templateFile: 'templates/module/infra/mappers/tests/mapper.spec.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/infra/mappers/{{dashCase name}}.mapper.ts',
                        templateFile: 'templates/module/infra/mappers/mapper.hbs'
                    }
                );
            } else {
                actions.push(
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.dto.ts',
                        templateFile: 'templates/module/application/use-cases/dto.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.use-case.ts',
                        templateFile: 'templates/module/application/use-cases/use-case.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/application/use-cases/tests/create-{{dashCase name}}.use-case.spec.ts',
                        templateFile: 'templates/module/application/use-cases/tests/use-case.spec.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/aggregates/{{dashCase name}}.aggregate.ts',
                        templateFile: 'templates/module/domain/aggregates/aggregate.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/aggregates/tests/{{dashCase name}}.aggregate.spec.ts',
                        templateFile: 'templates/module/domain/aggregates/tests/aggregate.spec.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/entities/{{dashCase name}}.entity.ts',
                        templateFile: 'templates/module/domain/entities/entity.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/entities/tests/{{dashCase name}}.entity.spec.ts',
                        templateFile: 'templates/module/domain/entities/tests/entity.spec.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/repo/{{dashCase name}}.repo.ts',
                        templateFile: 'templates/module/domain/repo/repo.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/value-objects/{{dashCase name}}.value-object.ts',
                        templateFile: 'templates/module/domain/value-objects/value-object.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/domain/value-objects/tests/{{dashCase name}}.value-object.spec.ts',
                        templateFile: 'templates/module/domain/value-objects/tests/value-object.spec.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/infra/mappers/tests/{{dashCase name}}.mapper.spec.ts',
                        templateFile: 'templates/module/infra/mappers/tests/mapper.spec.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/infra/mappers/{{dashCase name}}.mapper.ts',
                        templateFile: 'templates/module/infra/mappers/mapper.hbs'
                    },
                    {
                        type: 'add',
                        path: 'src/{{dashCase name}}/infra/models/{{dashCase name}}.model.ts',
                        templateFile: 'templates/module/infra/models/model.hbs'
                    }
                );
            }

            return actions;
        }
    });
};
