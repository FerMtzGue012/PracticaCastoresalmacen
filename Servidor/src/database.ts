import mysql from 'promise-mysql';
import key from './key';

const pool= mysql.createPool(key.database);


pool.getConnection().then(connection =>{

pool.releaseConnection(connection);
console.log('BD  CONECTADA');

}); 
    
export default pool;
    
    
