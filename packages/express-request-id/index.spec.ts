import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';

import { ExpressRequestIdMiddleware } from './index';

describe('ExpressRequestIdMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ExpressRequestIdMiddleware;
    let ProxiedExpressRequestIdMiddleware;
    let expressRequestIdStub: sinon.SinonStub;
    beforeEach(() => {
        expressRequestIdStub = stub();
        ProxiedExpressRequestIdMiddleware = proxyquire('./index', {
            'express-request-id': expressRequestIdStub,
        }).ExpressRequestIdMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            expressRequestIdStub.returns(stub());
            ProxiedExpressRequestIdMiddleware.configure({});
            middleware = new ProxiedExpressRequestIdMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(expressRequestIdStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedExpressRequestIdMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            expressRequestIdStub.returns(stub());
            middleware = new ProxiedExpressRequestIdMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(expressRequestIdStub.called).to.be.true;
        });
    });
});
