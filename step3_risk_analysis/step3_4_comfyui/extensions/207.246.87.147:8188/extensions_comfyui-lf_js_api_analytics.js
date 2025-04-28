import { APIEndpoints, } from '../types/api/api.js';
import { LogSeverity } from '../types/manager/manager.js';
import { getLFManager } from '../utils/common.js';
import { api } from '/scripts/api.js';
export const ANALYTICS_API = {
    //#region clear
    clear: async (type) => {
        const lfManager = getLFManager();
        const payload = {
            message: '',
            status: LogSeverity.Info,
        };
        try {
            const body = new FormData();
            body.append('type', type);
            const response = await api.fetchApi(APIEndpoints.ClearAnalytics, {
                body,
                method: 'POST',
            });
            const code = response.status;
            switch (code) {
                case 200:
                    const p = await response.json();
                    if (p.status === 'success') {
                        payload.message = p.message;
                        payload.status = LogSeverity.Error;
                        lfManager.getCachedDatasets().usage = {};
                    }
                    break;
                case 404:
                    payload.message = `Analytics not found: ${type}. Skipping deletion.`;
                    payload.status = LogSeverity.Info;
                    break;
                default:
                    payload.message = `Unexpected response from the clear-analytics ${type} API: ${p.message}`;
                    payload.status = LogSeverity.Error;
                    break;
            }
        }
        catch (error) {
            payload.message = error;
            payload.status = LogSeverity.Error;
        }
        lfManager.log(payload.message, { payload }, payload.status);
        return payload;
    },
    //#endregion
    //#region get
    get: async (directory, type) => {
        const lfManager = getLFManager();
        const payload = {
            data: {},
            message: '',
            status: LogSeverity.Info,
        };
        if (!directory || !type) {
            payload.message = `Missing directory (received ${directory}) or  (received ${type}).`;
            payload.status = LogSeverity.Error;
            lfManager.log(payload.message, { payload }, LogSeverity.Error);
            return payload;
        }
        try {
            const body = new FormData();
            body.append('directory', directory);
            body.append('type', type);
            const response = await api.fetchApi(APIEndpoints.GetAnalytics, {
                body,
                method: 'POST',
            });
            const code = response.status;
            switch (code) {
                case 200:
                    const p = await response.json();
                    if (p.status === 'success') {
                        payload.data = p.data;
                        payload.message = 'Analytics data fetched successfully.';
                        payload.status = LogSeverity.Success;
                        lfManager.log(payload.message, { payload }, payload.status);
                        lfManager.getCachedDatasets().usage = payload.data;
                    }
                    break;
                case 404:
                    payload.status = LogSeverity.Info;
                    lfManager.log(`${type} analytics file not found.`, { payload }, payload.status);
                    break;
                default:
                    payload.message = `Unexpected response from the get-analytics ${type} API: ${p.message}`;
                    payload.status = LogSeverity.Error;
                    break;
            }
        }
        catch (error) {
            payload.message = error;
            payload.status = LogSeverity.Error;
        }
        lfManager.log(payload.message, { payload }, payload.status);
        return payload;
    },
    //#endregion
};
