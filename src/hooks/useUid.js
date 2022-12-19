import React, {useContext} from 'react';
import { AuthContext } from '../navigation/AuthProvider';

export const useUid = () => {
    return useContext(AuthContext).user.uid;
}