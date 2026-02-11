// import { clerkClient } from "@clerk/express";

// export const protectEducator = async (req, res, next) => {
//     try {
//         const userId = req.auth.userId;
//         const response = await clerkClient.users.getUser(userId);

//         if (response.publicMetadata.role !== 'educator') {
//             return res.json({ success: false, message: 'Unauthorized Access' });
//         }
//         next();
//     } catch (error) {
//         res.json({ success: false, message: error.message });
//     }
// };

import { clerkClient } from "@clerk/express";

export const protectEducator = async (req, res, next) => {
    try {
        const userId = req.auth.userId;

        // Step 1: Check if userId actually exists before calling Clerk

        if (!userId) {
            return res.json({ success: false, message: 'Session Expired: Please login again' });
        }

        const response = await clerkClient.users.getUser(userId);

        if (response.publicMetadata.role !== 'educator') {
            return res.json({ success: false, message: 'Unauthorized Access' });
        }
        
        next();
    } catch (error) {
        // Step 2: Clearer error message in terminal for debugging
        console.error("Auth Middleware Error:", error.message);
        res.json({ success: false, message: error.message });
    }
};