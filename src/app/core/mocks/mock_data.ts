import { Section } from 'src/app/shared/models/section'

export const SECTION: Section[] = [
    {
        id: 1,
        name: 'Plan de evacuación y emergencias',
        questions: [
            {
                id: 1,
                name: '¿El Jefe de Seguridad conoce sus responsabilidades como Jefe de la emergencia?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 2,
                name: '¿Se encuentran definidas detalladamente las responsabilidades del Jefe de Seguridad en su calidad de encargado de la emergencia?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 3,
                name: '¿Se detallan en el Plan las emergencias y procedimientos a seguir por cada una de ellas?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 4,
                name: '¿Se establece en el Plan un Procedimiento de comunicaciones internas?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 5,
                name: '¿Se ha capacitado al personal de seguridad en el uso de los sistemas y medios disponibles para enfrentar emergencias?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 6,
                name: '¿Están los registros de capacitación y entrenamiento del personal de seguridad para los sistemas y medios disponibles para enfrentar emergencias?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 7,
                name: '¿Se han cumplido los simulacros de acuerdo con lo indicado en el plan?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 8,
                name: '¿Se han distribuidos copias a los  locatarios del edificio?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 9,
                name: '¿Los ocupantes de dependencias o locales del edificio han sido capacitado en los procedimientos de emergencia del plan del edificio?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 10,
                name: '¿Las empresas contratistas son controlados en la realización de trabajos que pudiesen generar una emergencia?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 11,
                name: '¿Se considera una brigada de emergencia?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 12,
                name: '¿El personal de seguridad ha sido instruido en primeros auxilios y uso del DEA?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 13,
                name: '¿El personal de seguridad ha sido instruido en uso de extintores?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 14,
                name: '¿El personal de seguridad ha sido instruido en el uso de los medios contra incendios con agua (red húmeda)?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 15,
                name: '¿El personal de seguridad posee los medios de comunicación para ser alertados en caso de emergencia?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 16,
                name: '¿Existe zona establecida para la llegada de vehículos de emergencia?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 17,
                name: '¿El lugar para posicionamiento de los vehículos de emergencia esta señalizado?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.17
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        name: 'Señales de vias de evacuación',
        questions: [
            {
                id: 18,
                name: '¿El personal de seguridad ha sido instruido respecto de las principales señalizaciones de emergencias?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 5
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 19,
                name: '¿El personal de seguridad comprende que debe dar aviso en forma inmediata a su central cada vez que detecta una señalización de emergencia obstruida o en mal estado?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 5
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Control de trabajos riesgosos',
        questions: [
            {
                id: 20,
                name: '¿Existe procedimiento de seguridad por trabajos de soldadura, cortes o similares en la instalación?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2.5
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 21,
                name: '¿El Supervisor de Seguridad ha sido capacitado para el cumplimiento de sus rondas de control de este tipo de trabajo?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2.5
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 22,
                name: 'El Guardia responsable del control de acceso (espejo) para trabajos en el Mall ¿Conoce el procedimiento?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2.5
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Red seca para bomberos',
        questions: [
            {
                id: 23,
                name: '¿Los guardias han sido capacitados sobre este sistema y su relevancia?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 24,
                name: '¿Los guardias saben el lugar en donde se encuentran ubicadas las tomas exteriores?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 25,
                name: '¿El personal de seguridad entiende que las tomas de la red seca (externas o internas) deben mantenerse siempre libres de obstaculos?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 26,
                name: '¿El personal de seguridad entiende que las tomas de la red seca (externas o internas) deben mantenerse siempre  protegidas por sus respectivas tapas storz?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 27,
                name: '¿El personal de seguridad sabe cual es el procedimiento que debe tomar en caso de encontrar obstruidas las tomas de este sistema?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Red húmeda de protección del edificio',
        questions: [
            {
                id: 28,
                name: '¿Los guardias han sido capacitados sobre este sistema y su relevancia?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 29,
                name: '¿Los guardias saben el lugar en donde se encuentran ubicados los gabinetes de la red humeda en el Mall?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 30,
                name: '¿El personal de seguridad entiende que los gabinetes de la red húmeda deben mantenerse siempre libres de obstaculos? ',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 31,
                name: '¿El personal de seguridad entiende que los gabinetes de la red humeda deben mantenerse siempre visiblemente limpios y protegidos?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 32,
                name: '¿El personal de seguridad sabe cual es el procedimiento que debe tomar en caso de encontrar obstruidos o violentados los gabinetes de este sistema?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 3
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Red inerte',
        questions: [
            {
                id: 33,
                name: '¿Los guardias han sido capacitados sobre este sistema y su relevancia?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 34,
                name: '¿Los guardias saben el lugar en donde se encuentran ubicados las tomas de la red inerte en el Mall?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 35,
                name: '¿El personal de seguridad entiende que las tomas de red inerte deben mantenerse siempre libres de obstaculos?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 36,
                name: '¿El personal de seguridad entiende que las tomas de la red inerte deben mantenerse siempre visiblemente limpios y protegidas con sus tapas de seguridad?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 37,
                name: '¿El personal de seguridad sabe cual es el procedimiento que debe tomar en caso de encontrar obstruidas o violentadas las tomas de la red inerte?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Sistema de extintores portatiles',
        questions: [
            {
                id: 38,
                name: '¿Se realiza capacitación al personal de seguridad sobre el uso de extintores portátiles?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 39,
                name: '¿Los guardias saben el lugar en donde se encuentran ubicados los extintores en el Mall?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 40,
                name: '¿El personal de seguridad entiende que los extintores deben mantenerse siempre libres de obstaculos?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 41,
                name: '¿Los extintores se encuentran libres de obstáculos?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 42,
                name: '¿El personal de seguridad entiende que los extintores deben mantenerse siempre visiblemente limpios y sin ninguna señal de golpes o daños?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 2
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        name: 'Sistema automático de detección de fuego',
        questions: [
            {
                id: 43,
                name: '¿Mantienen planos con la ubicación de los detectores de fuego?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 44,
                name: '¿Se considera en los planos la ubicación de los pulsadores?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 45,
                name: '¿Mantienen una unidad de control y monitoreo del sistema? (sala espejo)',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 46,
                name: '¿Se considera en la unidad de control una visualización de activación de detectores? (Sala espejo)',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 47,
                name: '¿Se considera en la unidad de control un operador por jornada laboral?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 48,
                name: '¿Se considera en la unidad de control operador 24 x 7?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 49,
                name: '¿Se considera para el operador de la unidad de control (guardia de seguridad sala espejo) entrenamiento especifico?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 50,
                name: '¿Se considera en la unidad de control identificar el numero y/o ubicación del detector activado?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 51,
                name: '¿Se considera en la unidad de control, alarma sonora por activación de un detector que alerte al operador?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 52,
                name: '¿El personal de seguridad conoce el sistema de detección de humo?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 53,
                name: '¿El personal de seguridad entiende que los detectores de humo deben mantenerse siempre visiblemente limpios y sin ninguna señal de golpes o daños?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 54,
                name: '¿El personal de seguridad conoce el sistema de pulsadores?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 55,
                name: '¿El personal de seguridad entiende cuales son las circunstancias en se debe activar este elemento?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
            {
                id: 56,
                name: '¿Los pulsadores se encuentran en buen estado de conservación?',
                answers: [
                    {
                        id: 1,
                        name: 'Si',
                        isSelected: false,
                        score: 1.33
                    },
                    {
                        id: 2,
                        name: 'No',
                        isSelected: false,
                        score: 0
                    },
                    {
                        id: 3,
                        name: 'N/A',
                        isSelected: false,
                        score: 0
                    }
                ]
            },
        ]
    }
]