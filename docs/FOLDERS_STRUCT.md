    .
    ├── docs                    # Documentation files
    ├── src                     # Source files
    │   ├── core                    # core modules
    │   │   ├── api                         # api clients
    │   │   │   └── types                       # api types
    │   │   └── utils                       # utilities functions
    │   ├── modules                    # businesses modules
    │   │   ├── customers                   # customers features
    │   │   │   ├── operations                  # api operations
    │   │   │   └── view-models                 # customers view-models
    │   │   ├── orders                      # orders features
    │   │   ├── products                    # products features
    │   │   ├── referential-customer        # Referential customer features
    │   │   ├── referential-order           # Referential order features
    │   │   └── referential-product         # Referential product features
    │
    ├── codegen.yml                     # GraphQL configuration file (npm run graphql-codegen)
    └── README.md
