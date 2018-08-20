const MODEL_NAME = 'MyExampleChildModel';

// See http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-init
// for documentation on model attributes and options.
function define(sequelize, DataTypes) {
  // See http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes
  // for list of available data types.
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    description_required: {
      type: DataTypes.STRING(400),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email_optional: {
      type: DataTypes.STRING(320),
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    email_required: {
      type: DataTypes.STRING(320),
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    lat_optional: {
      type: DataTypes.FLOAT,
    },
    lat_required: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lng_optional: {
      type: DataTypes.FLOAT,
    },
    lng_required: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: 'name',
      validate: {
        notEmpty: true,
      },
    },
    slug: {
      type: DataTypes.STRING(31),
      allowNull: false,
      unique: 'slug',
      validate: {
        notEmpty: true,
      },
    },
    url_required: {
      type: DataTypes.STRING(512),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    url_optional: {
      type: DataTypes.STRING(512),
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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    text_long: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    text_medium: {
      type: DataTypes.TEXT('medium'),
      allowNull: false,
    },
    text_tiny: {
      type: DataTypes.TEXT('tiny'),
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
      defaultValue: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV4,
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
  };

  const options = {};

  const Model = sequelize.define(MODEL_NAME, attributes, options);

  Model.associate = models_unused => {
    // Nothing to associate.
  };

  Model.associate = models => {
    models.MyExampleChildModel.belongsTo(models.MyExampleParentModel, {
      foreignKey: 'parentId',
      as: 'parent',
      onUpdate: 'cascade',
      onDelete: 'cascade',
    });
  };

  return Model;
}

export default define;
