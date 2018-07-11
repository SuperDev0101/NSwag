﻿//-----------------------------------------------------------------------
// <copyright file="CSharpControllerRouteNamingStrategy.cs" company="NSwag">
//     Copyright (c) Sam Goldmann. All rights reserved.
// </copyright>
// <license>https://github.com/NSwag/NSwag/blob/master/LICENSE.md</license>
// <author>Sam Goldmann, sam.goldmann@gmail.com</author>
//-----------------------------------------------------------------------

namespace NSwag.CodeGeneration.CSharp.Models
{
    
    /// <summary>The CSharp controller routing naming strategy enum.</summary>
    public enum CSharpControllerRouteNamingStrategy
    {
        /// <summary>Disable route naming.</summary>
        None,

        /// <summary>Use the operationId as the route name, if available.</summary>
        OperationId
    }
}
