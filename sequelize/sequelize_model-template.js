// Note: `allowNull` defaults to true.

const DEFAULT_MODEL_NAME = 'MyExampleChildModel';

// See http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-init
// for documentation on model attributes and options.
function define (sequelize, modelName = DEFAULT_MODEL_NAME) {
  // See http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes
  // for list of available data types.
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      // IDs should never be exposed as numbers. It is okay to save them as numbers. So,
      // convert to a string.
      get () {
        return '' + this.getDataValue('id');
      },
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING(320),
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: -90,
        max: 90,
      },
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: -180,
        max: 180,
      },
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: 'name',
      validate: {
        notEmpty: true,
      },
    },
    publicId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      unique: 'publicId',
    },
    slug: {
      type: DataTypes.STRING(31),
      allowNull: false,
      unique: 'slug',
      validate: {
        notEmpty: true,
      },
    },
    url: {
      type: DataTypes.STRING(512),
      allowNull: false,
      validate: {
        isUrl: true,
        notEmpty: true,
      },
    },

    blob: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    blob_long: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
    blob_medium: {
      type: DataTypes.BLOB('medium'),
      allowNull: false,
    },
    blob_tiny: {
      type: DataTypes.BLOB('tiny'),
      allowNull: false,
    },
    boolean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    boolean_with_default: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_with_default_of_now: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    date_only: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    enum_with_default: {
      type: DataTypes.ENUM('value1', 'value2', 'etc'),
      allowNull: false,
      defaultValue: 'value1',
    },
    decimal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    decimal_with_precision_and_scale: {
      type: DataTypes.DECIMAL(8, 3),
      allowNull: false,
    },
    float: {
      type: DataTypes.FLOAT, // 4-byte precision
      allowNull: false,
    },
    float_double: {
      type: DataTypes.DOUBLE, // 8-byte precision
      allowNull: false,
    },
    float_with_length_and_decimal: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false,
    },
    integer: {
      type: DataTypes.INTEGER, // 32-bit
      allowNull: false,
    },
    integer_big: {
      type: DataTypes.BIGINT, // 64-bit
      allowNull: false,
    },
    integer_medium: {
      type: DataTypes.MEDIUMINT, // 24-bit
      allowNull: false,
    },
    integer_small: {
      type: DataTypes.SMALLINT, // 16-bit
      allowNull: false,
    },
    integer_tiny: {
      type: DataTypes.TINYINT, // 8-bit
      allowNull: false,
    },
    integer_unsigned: {
      type: DataTypes.INTEGER.UNSIGNED, // 32-bit
      allowNull: false,
    },
    json: {
      // Available in MySQL, Postgres, and SQLite.
      type: DataTypes.JSON,
      allowNull: false,
    },
    jsonb: {
      // Available in Postgres only.
      type: DataTypes.JSONB,
      allowNull: false,
    },
    string: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    string_with_default: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    string_with_length: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    string_fixed_length: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    string_fixed_length_with_length: {
      type: DataTypes.CHAR(4),
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT, // Max len of 65,535 (2^16 − 1) characters.
      allowNull: false,
    },
    text_long: {
      type: DataTypes.TEXT('long'), // Max len of 4,294,967,295 or 4GB (2^32 − 1) characters.
      allowNull: false,
    },
    text_medium: {
      type: DataTypes.TEXT('medium'), // Max len of 16,777,215 (2^24 − 1) characters.
      allowNull: false,
    },
    text_tiny: {
      type: DataTypes.TEXT('tiny'), // Max len of 255 (2^8 − 1) characters.
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    uuid_with_default: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV1, // Most likely to have similar value.
      defaultValue: DataTypes.UUIDV4, // Very random, i.e., unlikely to have similar value.
      defaultValue: function () {
        return someFunctionToGenerateId();
      },
    },

    nullible_column: {
      // Just remove or set `allowNull` to `true`.
    },

    virtual_column: {
      type: DataTypes.VIRTUAL,
      set: function (virtualVal) {
        // Remember to set the data value, otherwise it won't be validated
        this.setDataValue('virtual_column', virtualVal);
        let realVal = ...;
        this.setDataValue('real_column', realVal);
      },
      // Validations run on the virtual value.
      validate: {
        isValid: function (virtualVal) {
          ...
        }
      },
    },

    virtual_column: {
      // TODO: Choose a return type and declare the fields (real or virtual) this
      // virtual field depends on.
      type: new DataTypes.VIRTUAL(DataTypes.YOUR_CHOICE, ['dependency_field_1', 'dependency_field2', 'etc']),
      get: function () {
        // E.g.,:
        return `${this.get('dependency_field_1')} ${this.get('dependency_field_2')}`;
      },
    },
    
    validated_column: {
      type: ...,
      ...
      // See http://docs.sequelizejs.com/manual/tutorial/models-definition.html#validations
      // for list of built-in validators.
      validate: {
        // Using Validate.js
        
        
      },
    },
  };

  const options = {
    // Add a comment for the table in MySQL or Postgres.
    comment: 'This represents ...',
    // See https://sequelize.org/v5/manual/models-definition.html#indexes
    indexes: [
      { fields: ['date_field', 'etc'] },
      { fields: ['name_field'], unique: true },
      { fields: ['some_field', 'etc'], name: 'table_some_field_index', },
    ],
    // paranoid: false,
    // timestamps: false,
    // version: false,
    // Define model level validators to be run after all field validators.  Besure to
    // use a name that does not conflict with a field name. Model validator are called
    // with the model object's context and are deemed to fail if they throw an error,
    // otherwise pass. 
    validate: {
      bothLatLngOrNone() {
        if ((this.lat === null) !== (this.lng === null)) {
          throw new Error('Require either both latitude and longitude or neither');
        }
      },
      etc() { ... },
    },
  };

  const Model = sequelize.define(modelName, attributes, options);

  Model.associate = models_unused => {
    // Nothing to associate.
  };

  Model.associate = models => {
    // See https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-belongsTo
    models.MyExampleChildModel.belongsTo(models.MyExampleParentModel, {
      foreignKey: 'parentId',
      // child.getParent()
      as: 'parent',
      onUpdate: 'cascade',
      onDelete: 'cascade',
    });

    // https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-hasOne
    models.MyExampleParentModel.hasOne(models.MyExampleChildModel, {
      foreignKey: 'parentId',
      // parent.getChild()
      as: 'child',
      onUpdate: 'cascade',
      onDelete: 'cascade',
    });

    // See https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-hasMany
    models.MyExampleParentModel.hasMany(models.MyExampleChildModel, {
      foreignKey: 'parentId',
      // parent.getChildren()
      as: 'children',
      onUpdate: 'cascade',
      onDelete: 'cascade',
    });

    // See https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-belongsToMany
    models.MyExampleChildModel.belongsToMany(models.MyExampleParentModel, {
      // Defaults to source + primary key of source
      foreignKey: 'childId',
      // Defaults to target + primary key of target
      otherKey: 'parentId',
      // child.getParents()
      as: 'parents',
      onUpdate: 'cascade',
      onDelete: 'cascade',
      through: models.MyParentChildModel,
      timestamps: true,
    });
  };

  return Model;
}

export default define;
