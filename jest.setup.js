const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(), // Mock the observe method
  unobserve: jest.fn(), // Mock the unobserve method
  disconnect: jest.fn(), // Mock the disconnect method
}));