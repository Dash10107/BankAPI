const request = require('supertest');
const app = require('../app'); // Ensure this path points to where your Express app is defined
const { sequelize } = require('../models'); // Ensure this path points to your Sequelize instance

beforeAll(async () => {
  await sequelize.sync(); // Ensure your models are synchronized
});

describe('Bank API', () => {
  const testIFSC = "ABHY0065002";

  // Test case for getting the list of banks
  it('should get the list of banks', async () => {
    const res = await request(app).get('/api/banks');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Test case for getting branches by bank name
  it('should get branches by bank name', async () => {
    const res = await request(app).get(`/api/banks/CANARA BANK/branches`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Test case for getting branch details by IFSC
  it('should get branch details by IFSC', async () => {
    const res = await request(app).get(`/api/branches/${testIFSC}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('ifsc', testIFSC);
  });


  // Test case for getting branches by city
  it('should get branches by city', async () => {
    const res = await request(app).get('/api/branches/city/MUMBAI');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });


});
