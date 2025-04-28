import { APIEndpoints } from '../types/api/api.js';
import { LogSeverity } from '../types/manager/manager.js';
import { getLFManager } from '../utils/common.js';
import { api } from '/scripts/api.js';
export const BACKUP_API = {
    //#region new
    new: async (backupType = 'automatic') => {
        const lfManager = getLFManager();
        const payload = {
            message: '',
            status: LogSeverity.Info,
        };
        try {
            const body = new FormData();
            body.append('backup_type', backupType);
            const response = await api.fetchApi(APIEndpoints.NewBackup, { body, method: 'POST' });
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
