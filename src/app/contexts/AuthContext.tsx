import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../../types';
import api from '../api/base-api';

interface AuthContextType {
    user: User | null;
    login: (credentials: { username: string; password: string }) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
            // You would typically validate the token here
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (credentials: { username: string; password: string }) => {
        try {
            const response = await api.post('/auth/login', credentials);
            const { token, user: userData } = response.data;
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(userData);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
        setUser(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};