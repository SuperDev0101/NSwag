﻿//-----------------------------------------------------------------------
// <copyright file="NSwagSettings.cs" company="NSwag">
//     Copyright (c) Rico Suter. All rights reserved.
// </copyright>
// <license>https://github.com/NSwag/NSwag/blob/master/LICENSE.md</license>
// <author>Rico Suter, mail@rsuter.com</author>
//-----------------------------------------------------------------------
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using NConsole;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using NJsonSchema;
using NJsonSchema.Infrastructure;
using NSwag.AssemblyLoader.Utilities;
using NSwag.SwaggerGeneration;
using NSwag.SwaggerGeneration.Processors;

namespace NSwag.Commands.SwaggerGeneration
{
    /// <inheritdoc />
    public abstract class SwaggerGeneratorCommandBase<TSettings> : IsolatedSwaggerOutputCommandBase<TSettings>
        where TSettings : SwaggerGeneratorSettings, new()
    {
        /// <summary>Initializes a new instance of the <see cref="SwaggerGeneratorCommandBase{T}"/> class.</summary>
        protected SwaggerGeneratorCommandBase()
        {
            Settings = new TSettings();
        }

        [JsonIgnore]
        protected override TSettings Settings { get; }

        [Argument(Name = nameof(DefaultPropertyNameHandling), IsRequired = false, Description = "The default property name handling ('Default' or 'CamelCase').")]
        public PropertyNameHandling DefaultPropertyNameHandling
        {
            get => Settings.DefaultPropertyNameHandling;
            set => Settings.DefaultPropertyNameHandling = value;
        }

        [Argument(Name = nameof(DefaultReferenceTypeNullHandling), IsRequired = false, Description = "The default reference type null handling (if NotNullAttribute and CanBeNullAttribute are missing, default: Null, Null or NotNull).")]
        public ReferenceTypeNullHandling DefaultReferenceTypeNullHandling
        {
            get => Settings.DefaultReferenceTypeNullHandling;
            set => Settings.DefaultReferenceTypeNullHandling = value;
        }

        [Argument(Name = nameof(DefaultResponseReferenceTypeNullHandling), IsRequired = false, Description = "The default response reference type null handling (if NotNullAttribute and CanBeNullAttribute are missing, default: Null, Null or NotNull).")]
        public ReferenceTypeNullHandling DefaultResponseReferenceTypeNullHandling
        {
            get => Settings.DefaultResponseReferenceTypeNullHandling;
            set => Settings.DefaultResponseReferenceTypeNullHandling = value;
        }

        [Argument(Name = "DefaultEnumHandling", IsRequired = false, Description = "The default enum handling ('String' or 'Integer'), default: Integer.")]
        public EnumHandling DefaultEnumHandling
        {
            get => Settings.DefaultEnumHandling;
            set => Settings.DefaultEnumHandling = value;
        }

        [Argument(Name = "FlattenInheritanceHierarchy", IsRequired = false, Description = "Flatten the inheritance hierarchy instead of using allOf to describe inheritance (default: false).")]
        public bool FlattenInheritanceHierarchy
        {
            get => Settings.FlattenInheritanceHierarchy;
            set => Settings.FlattenInheritanceHierarchy = value;
        }

        [Argument(Name = "GenerateKnownTypes", IsRequired = false, Description = "Generate schemas for types in KnownTypeAttribute attributes (default: true).")]
        public bool GenerateKnownTypes
        {
            get => Settings.GenerateKnownTypes;
            set => Settings.GenerateKnownTypes = value;
        }

        [Argument(Name = "GenerateEnumMappingDescription", IsRequired = false, 
            Description = "Generate a description with number to enum name mappings (for integer enums only, default: false).")]
        public bool GenerateEnumMappingDescription
        {
            get => Settings.GenerateEnumMappingDescription;
            set => Settings.GenerateEnumMappingDescription = value;
        }

        [Argument(Name = "GenerateXmlObjects", IsRequired = false, Description = "Generate xmlObject representation for definitions (default: false).")]
        public bool GenerateXmlObjects
        {
            get => Settings.GenerateXmlObjects;
            set => Settings.GenerateXmlObjects = value;
        }

        [Argument(Name = "GenerateAbstractProperties", IsRequired = false, Description = "Generate abstract properties (i.e. interface and abstract properties. " +
            "Properties may defined multiple times in a inheritance hierarchy, default: false).")]
        public bool GenerateAbstractProperties
        {
            get => Settings.GenerateAbstractProperties;
            set => Settings.GenerateAbstractProperties = value;
        }

        [Argument(Name = "GenerateAbstractSchemas", IsRequired = false, Description = "Generate the x-abstract flag on schemas (default: true).")]
        public bool GenerateAbstractSchemas
        {
            get => Settings.GenerateAbstractSchemas;
            set => Settings.GenerateAbstractSchemas = value;
        }

        [Argument(Name = "IgnoreObsoleteProperties", IsRequired = false, Description = "Ignore properties with the ObsoleteAttribute (default: false).")]
        public bool IgnoreObsoleteProperties
        {
            get => Settings.IgnoreObsoleteProperties;
            set => Settings.IgnoreObsoleteProperties = value;
        }

        [Argument(Name = "AllowReferencesWithProperties", IsRequired = false, Description = "Use $ref references even if additional properties are defined on " +
            "the object (otherwise allOf/oneOf with $ref is used, default: false).")]
        public bool AllowReferencesWithProperties
        {
            get => Settings.AllowReferencesWithProperties;
            set => Settings.AllowReferencesWithProperties = value;
        }

        [Argument(Name = "ExcludedTypeNames", IsRequired = false, Description = "The excluded type names (same as JsonSchemaIgnoreAttribute).")]
        public string[] ExcludedTypeNames
        {
            get => Settings.ExcludedTypeNames;
            set => Settings.ExcludedTypeNames = value;
        }

        [Argument(Name = "ServiceHost", IsRequired = false, Description = "Overrides the service host of the web service (optional, use '.' to remove the hostname).")]
        public string ServiceHost { get; set; }

        [Argument(Name = "ServiceBasePath", IsRequired = false, Description = "The basePath of the Swagger specification (optional).")]
        public string ServiceBasePath { get; set; }

        [Argument(Name = "ServiceSchemes", IsRequired = false, Description = "Overrides the allowed schemes of the web service (optional, comma separated, 'http', 'https', 'ws', 'wss').")]
        public string[] ServiceSchemes { get; set; } = new string[0];

        [Argument(Name = "InfoTitle", IsRequired = false, Description = "Specify the title of the Swagger specification (ignored when DocumentTemplate is set).")]
        public string InfoTitle
        {
            get => Settings.Title;
            set => Settings.Title = value;
        }

        [Argument(Name = "InfoDescription", IsRequired = false, Description = "Specify the description of the Swagger specification (ignored when DocumentTemplate is set).")]
        public string InfoDescription
        {
            get => Settings.Description;
            set => Settings.Description = value;
        }

        [Argument(Name = "InfoVersion", IsRequired = false, Description = "Specify the version of the Swagger specification (default: 1.0.0, ignored when DocumentTemplate is set).")]
        public string InfoVersion
        {
            get => Settings.Version;
            set => Settings.Version = value;
        }

        [Argument(Name = "DocumentTemplate", IsRequired = false, Description = "Specifies the Swagger document template (may be a path or JSON, default: none).")]
        public string DocumentTemplate { get; set; }

        [Argument(Name = "DocumentProcessors", IsRequired = false, Description = "The document processor type names in the form 'assemblyName:fullTypeName' or 'fullTypeName').")]
        public string[] DocumentProcessorTypes { get; set; } = new string[0];

        [Argument(Name = "OperationProcessors", IsRequired = false, Description = "The operation processor type names in the form 'assemblyName:fullTypeName' or 'fullTypeName').")]
        public string[] OperationProcessorTypes { get; set; } = new string[0];

        [Argument(Name = "TypeNameGenerator", IsRequired = false, Description = "The custom ITypeNameGenerator implementation type in the form 'assemblyName:fullTypeName' or 'fullTypeName').")]
        public string TypeNameGeneratorType { get; set; }

        [Argument(Name = "SchemaNameGenerator", IsRequired = false, Description = "The custom ISchemaNameGenerator implementation type in the form 'assemblyName:fullTypeName' or 'fullTypeName').")]
        public string SchemaNameGeneratorType { get; set; }

        [Argument(Name = "ContractResolver", IsRequired = false, Description = "DEPRECATED: The custom IContractResolver implementation type in the form 'assemblyName:fullTypeName' or 'fullTypeName').")]
        public string ContractResolverType { get; set; }

        [Argument(Name = "SerializerSettings", IsRequired = false, Description = "The custom JsonSerializerSettings implementation type in the form 'assemblyName:fullTypeName' or 'fullTypeName').")]
        public string SerializerSettingsType { get; set; }

        [Argument(Name = "UseDocumentProvider", IsRequired = false, Description = "Generate document using SwaggerDocumentProvider (configuration from AddSwagger(), most CLI settings will be ignored).")]
        public bool UseDocumentProvider { get; set; } = true;

        [Argument(Name = "DocumentName", IsRequired = false, Description = "The document name to use in SwaggerDocumentProvider (default: v1).")]
        public string DocumentName { get; set; } = "v1";

        [Argument(Name = "AspNetCoreEnvironment", IsRequired = false, Description = "Sets the ASPNETCORE_ENVIRONMENT if provided (default: empty).")]
        public string AspNetCoreEnvironment { get; set; }

        [Argument(Name = "CreateWebHostBuilderMethod", IsRequired = false, Description = "The CreateWebHostBuilder method in the form 'assemblyName:fullTypeName.methodName' or 'fullTypeName.methodName'.")]
        public string CreateWebHostBuilderMethod { get; set; }

        [Argument(Name = "Startup", IsRequired = false, Description = "The Startup class type in the form 'assemblyName:fullTypeName' or 'fullTypeName'.")]
        public string StartupType { get; set; }

        [Argument(Name = "AllowNullableBodyParameters", IsRequired = false, Description = "Nullable body parameters are allowed (ignored when MvcOptions.AllowEmptyInputInBodyModelBinding is available (ASP.NET Core 2.0+), default: true).")]
        public bool AllowNullableBodyParameters
        {
            get => Settings.AllowNullableBodyParameters;
            set => Settings.AllowNullableBodyParameters = value;
        }

        public async Task<TSettings> CreateSettingsAsync(AssemblyLoader.AssemblyLoader assemblyLoader, IWebHost webHost, string workingDirectory)
        {
            var mvcOptions = webHost?.Services?.GetRequiredService<IOptions<MvcOptions>>().Value;
            var mvcJsonOptions = webHost?.Services?.GetRequiredService<IOptions<MvcJsonOptions>>();
            var serializerSettings = mvcJsonOptions?.Value?.SerializerSettings;

            Settings.ApplySettings(serializerSettings, mvcOptions);
            Settings.DocumentTemplate = await GetDocumentTemplateAsync(workingDirectory);

            InitializeCustomTypes(assemblyLoader);

            return Settings;
        }

        protected async Task<IWebHost> CreateWebHostAsync(AssemblyLoader.AssemblyLoader assemblyLoader)
        {
            if (!string.IsNullOrEmpty(CreateWebHostBuilderMethod))
            {
                // Load configured CreateWebHostBuilder method from program type
                var segments = CreateWebHostBuilderMethod.Split('.');

                var programTypeName = string.Join(".", segments.Take(segments.Length - 1));
                var programType = assemblyLoader.GetType(programTypeName) ??
                    throw new InvalidOperationException("The Program class could not be determined.");

                var methodName = segments.Last();
                var method = programType.GetRuntimeMethod(segments.Last(), new[] { typeof(string[]) });
                if (method != null)
                {
                    return ((IWebHostBuilder)method.Invoke(null, new object[] { new string[0] })).Build();
                }
                else
                {
                    method = programType.GetRuntimeMethod(segments.Last(), new Type[0]);
                    if (method != null)
                    {
                        return ((IWebHostBuilder)method.Invoke(null, new object[0])).Build();
                    }
                    else
                    {
                        throw new InvalidOperationException("The CreateWebHostBuilderMethod '" + CreateWebHostBuilderMethod + "' could not be found.");
                    }
                }
            }
            else if (!string.IsNullOrEmpty(StartupType))
            {
                // Load configured startup type (obsolete)
                var startupType = assemblyLoader.GetType(StartupType);

#if NETCOREAPP1_0 || NETCOREAPP1_1
                return new WebHostBuilder().UseStartup(startupType).Build();
#else
                return WebHost.CreateDefaultBuilder().UseStartup(startupType).Build();
#endif
            }
            else
            {
                try
                {
                    // Search Program class and use CreateWebHostBuilder method
                    var assemblies = await LoadAssembliesAsync(AssemblyPaths, assemblyLoader).ConfigureAwait(false);
                    var firstAssembly = assemblies.FirstOrDefault() ?? throw new InvalidOperationException("No assembly are be loaded from AssemblyPaths.");

                    var programType = firstAssembly.ExportedTypes.First(t => t.Name == "Program") ??
                        throw new InvalidOperationException("The Program class could not be determined in the assembly '" + firstAssembly.FullName + "'.");

                    var method = programType.GetRuntimeMethod("CreateWebHostBuilder", new[] { typeof(string[]) });
                    if (method != null)
                    {
                        return ((IWebHostBuilder)method.Invoke(null, new object[] { new string[0] })).Build();
                    }
                    else
                    {
                        method = programType.GetRuntimeMethod("CreateWebHostBuilder", new Type[0]);
                        if (method != null)
                        {
                            return ((IWebHostBuilder)method.Invoke(null, new object[0])).Build();
                        }
                        else
                        {
                            throw new InvalidOperationException("The Program class '" + programType.FullName + "' does not have a CreateWebHostBuilder() method.");
                        }
                    }
                }
                catch
                {
                    // Search Startup class as fallback
                    var assemblies = await LoadAssembliesAsync(AssemblyPaths, assemblyLoader).ConfigureAwait(false);
                    var firstAssembly = assemblies.FirstOrDefault() ?? throw new InvalidOperationException("No assembly are be loaded from AssemblyPaths.");

                    var startupType = firstAssembly.ExportedTypes.FirstOrDefault(t => t.Name == "Startup");
                    if (startupType == null)
                    {
                        throw new InvalidOperationException("The Startup class could not be determined in the assembly '" + firstAssembly.FullName + "'.");
                    }

#if NETCOREAPP1_0 || NETCOREAPP1_1
                    return new WebHostBuilder().UseStartup(startupType).Build();
#else
                    return WebHost.CreateDefaultBuilder().UseStartup(startupType).Build();
#endif
                }
            }
        }

        protected void InitializeCustomTypes(AssemblyLoader.AssemblyLoader assemblyLoader)
        {
            if (DocumentProcessorTypes != null)
            {
                foreach (var p in DocumentProcessorTypes)
                {
                    var processor = (IDocumentProcessor)assemblyLoader.CreateInstance(p);
                    Settings.DocumentProcessors.Add(processor);
                }
            }

            if (OperationProcessorTypes != null)
            {
                foreach (var p in OperationProcessorTypes)
                {
                    var processor = (IOperationProcessor)assemblyLoader.CreateInstance(p);
                    Settings.OperationProcessors.Add(processor);
                }
            }

            if (!string.IsNullOrEmpty(TypeNameGeneratorType))
                Settings.TypeNameGenerator = (ITypeNameGenerator)assemblyLoader.CreateInstance(TypeNameGeneratorType);

            if (!string.IsNullOrEmpty(SchemaNameGeneratorType))
                Settings.SchemaNameGenerator = (ISchemaNameGenerator)assemblyLoader.CreateInstance(SchemaNameGeneratorType);

            if (!string.IsNullOrEmpty(ContractResolverType))
                Settings.ContractResolver = (IContractResolver)assemblyLoader.CreateInstance(ContractResolverType);

            if (!string.IsNullOrEmpty(SerializerSettingsType))
                Settings.SerializerSettings = (JsonSerializerSettings)assemblyLoader.CreateInstance(SerializerSettingsType);
        }

        protected void PostprocessDocument(SwaggerDocument document)
        {
            if (ServiceHost == ".")
                document.Host = string.Empty;
            else if (!string.IsNullOrEmpty(ServiceHost))
                document.Host = ServiceHost;

            if (ServiceSchemes != null && ServiceSchemes.Any())
            {
                document.Schemes = ServiceSchemes
                    .Select(s => (SwaggerSchema)Enum.Parse(typeof(SwaggerSchema), s, true))
                    .ToList();
            }

            if (!string.IsNullOrEmpty(ServiceBasePath))
                document.BasePath = ServiceBasePath;
        }

        private async Task<string> GetDocumentTemplateAsync(string workingDirectory)
        {
            if (!string.IsNullOrEmpty(DocumentTemplate))
            {
                var file = PathUtilities.MakeAbsolutePath(DocumentTemplate, workingDirectory);
                if (await DynamicApis.FileExistsAsync(file).ConfigureAwait(false))
                {
                    var json = await DynamicApis.FileReadAllTextAsync(file).ConfigureAwait(false);
                    if (json.StartsWith("{") == false)
                        return (await SwaggerYamlDocument.FromYamlAsync(json)).ToJson();
                    else
                        return json;
                }
                else if (DocumentTemplate.StartsWith("{") == false)
                    return (await SwaggerYamlDocument.FromYamlAsync(DocumentTemplate)).ToJson();
                else
                    return DocumentTemplate;
            }
            else
                return null;
        }
    }
}
