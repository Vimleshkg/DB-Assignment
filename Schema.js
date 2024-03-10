const { Sequelize, DataTypes } = require('sequelize');

// Creating a Sequelize instance connecting to your MySQL database

const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost', 
  dialect: 'mysql'   
});

// Defining the Product Category model

const ProductCategory = sequelize.define('product_category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  modified_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

// Defining  Inventory model

const Inventory = sequelize.define('inventory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  modified_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

// Defining Discount model

const Discount = sequelize.define('discount', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  discount_percent: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  modified_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

// Defining Product model

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  sku: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProductCategory,
      key: 'id'
    }
  },
  inventory_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Inventory,
      key: 'id'
    }
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  discount_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Discount,
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  modified_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}
);


// Synchronizing the models with the database
(async () => {
  try {
    // Synchronization, dropping existing tables if they exist 
    await sequelize.sync({ force: true });
    console.log('Database and tables created successfully!');
  } catch (error) {
    console.error('Error creating database and tables:', error);
  } finally { 
     
    await sequelize.close();
  
  }
})();
