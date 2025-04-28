import { APIEndpoints } from '../types/api/api.js';
import { LogSeverity } from '../types/manager/manager.js';
import { getLFManager } from '../utils/common.js';
import { api } from '/scripts/api.js';
export const JSON_API = {
    //#region get
    get: async (filePath) => {
        const lfManager = getLFManager();
        const payload = {
            data: {},
            message: '',
            status: LogSeverity.Info,
        };
        try {
            const body = new FormData();
            body.append('file_path', filePath);
            const response = await api.fetchApi(APIEndpoints.GetJson, {
                body,
                method: 'POST',
            });
            const code = response.status;
            switch (code) {
                case 200:
                    const p = await response.json();
                    if (p.status === 'success') {
                        payload.data = p.data;
                        payload.message = 'JSON data fetched successfully.';
                        payload.status = LogSeverity.Success;
                        lfManager.log(payload.message, { payload }, payload.status);
                        lfManager.getCachedDatasets().usage = payload.data;
                    }
                    break;
                default:
                    payload.message = `Unexpected response from the get-json API: ${await response.text()}`;
                    payload.status = LogSeverity.Error;
                    break;
            }
        }
        catch (error) {
            payload.message = error.toString();
            payload.status = LogSeverity.Error;
        }
        lfManager.log(payload.message, { payload }, payload.status);
        return payload;
    },
    //#endregion
    //#region update
    update: async (filePath, dataset) => {
        const lfManager = getLFManager();
        const payload = {
            message: '',
            status: LogSeverity.Info,
        };
        const body = new FormData();
        body.append('file_path', filePath);
        body.append('dataset', JSON.stringify(dataset));
        try {
            const response = await api.fetchApi(APIEndpoints.UpdateJson, {
                body,
                method: 'POST',
            });
            const code = response.status;
            switch (code) {
                case 200:
                    const p = await response.json();
                    if (p.status === 'success') {
                        payload.message = p.message;
                        payload.status = LogSeverity.Success;
                    }
                    break;
                default:
                    payload.message = 'Unexpected response from the API!';
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
