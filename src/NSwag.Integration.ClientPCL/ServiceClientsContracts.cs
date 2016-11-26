﻿//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v7.7.6174.25699 (NJsonSchema v5.19.6171.28316) (http://NSwag.org)
// </auto-generated>
//----------------------

using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;

namespace NSwag.Integration.ClientPCL.Contracts
{
    #pragma warning disable // Disable all warnings

    
    
    
    
    

    [JsonConverter(typeof(JsonInheritanceConverter), "discriminator")]
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "5.19.6171.28316")]
    public partial class Person 
    {
    
        [JsonProperty("Id", Required = Required.Always)]
        [Required]
        public Guid Id { get; set; }
    
        /// <summary>Gets or sets the first name.</summary>
        [JsonProperty("FirstName", Required = Required.Always)]
        [Required]
        public string FirstName { get; set; }
    
        /// <summary>Gets or sets the last name.</summary>
        [JsonProperty("LastName", Required = Required.Always)]
        [Required]
        public string LastName { get; set; }
    
        [JsonProperty("Gender", Required = Required.Always)]
        [Required]
        [JsonConverter(typeof(StringEnumConverter))]
        public Gender Gender { get; set; }
    
        [JsonProperty("DateOfBirth", Required = Required.Always)]
        [Required]
        public DateTime DateOfBirth { get; set; }
    
        [JsonProperty("Weight", Required = Required.Always)]
        public decimal Weight { get; set; }
    
        [JsonProperty("Height", Required = Required.Always)]
        public double Height { get; set; }
    
        [JsonProperty("Age", Required = Required.Always)]
        public int Age { get; set; }
    
        [JsonProperty("AverageSleepTime", Required = Required.Always)]
        [Required]
        public TimeSpan AverageSleepTime { get; set; }
    
        [JsonProperty("Address", Required = Required.Always)]
        [Required]
        public Address Address { get; set; } = new Address();
    
        [JsonProperty("Children", Required = Required.Always)]
        [Required]
        public ObservableCollection<Person> Children { get; set; } = new ObservableCollection<Person>();
    
        [JsonProperty("Skills", Required = Required.Default, NullValueHandling = NullValueHandling.Ignore)]
        public Dictionary<string, SkillLevel> Skills { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
        
        public static Person FromJson(string data)
        {
            return JsonConvert.DeserializeObject<Person>(data, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
    }
    
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "5.19.6171.28316")]
    public partial class Teacher : Person
    {
    
        [JsonProperty("Course", Required = Required.Default, NullValueHandling = NullValueHandling.Ignore)]
        public string Course { get; set; }
    
        [JsonProperty("MinimumSkillLevel", Required = Required.Always)]
        public SkillLevel MinimumSkillLevel { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
        
        public static Teacher FromJson(string data)
        {
            return JsonConvert.DeserializeObject<Teacher>(data, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
    }
    
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "5.19.6171.28316")]
    public partial class GeoPoint 
    {
    
        [JsonProperty("Latitude", Required = Required.Always)]
        public double Latitude { get; set; }
    
        [JsonProperty("Longitude", Required = Required.Always)]
        public double Longitude { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
        
        public static GeoPoint FromJson(string data)
        {
            return JsonConvert.DeserializeObject<GeoPoint>(data, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
    }
    
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "5.19.6171.28316")]
    public partial class GenericRequestOfAddressAndPerson 
    {
    
        [JsonProperty("Item1", Required = Required.Default, NullValueHandling = NullValueHandling.Ignore)]
        public Address Item1 { get; set; } = new Address();
    
        [JsonProperty("Item2", Required = Required.Default, NullValueHandling = NullValueHandling.Ignore)]
        public Person Item2 { get; set; } = new Person();
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
        
        public static GenericRequestOfAddressAndPerson FromJson(string data)
        {
            return JsonConvert.DeserializeObject<GenericRequestOfAddressAndPerson>(data, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
    }
    
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "5.19.6171.28316")]
    public partial class Address 
    {
    
        [JsonProperty("IsPrimary", Required = Required.Always)]
        public bool IsPrimary { get; set; }
    
        [JsonProperty("City", Required = Required.Default, NullValueHandling = NullValueHandling.Ignore)]
        public string City { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
        
        public static Address FromJson(string data)
        {
            return JsonConvert.DeserializeObject<Address>(data, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
    }
    
    [GeneratedCode("NJsonSchema", "5.19.6171.28316")]
    public enum Gender
    {
        [EnumMember(Value = "Male")]
        Male = 0,
    
        [EnumMember(Value = "Female")]
        Female = 1,
    
    }
    
    [GeneratedCode("NJsonSchema", "5.19.6171.28316")]
    public enum SkillLevel
    {
        Low = 0,
    
        Medium = 1,
    
        Height = 2,
    
    }
    
    [JsonObject(MemberSerialization.OptIn)]
    [GeneratedCode("NJsonSchema", "5.19.6171.28316")]
    public partial class PersonNotFoundException : Exception
    {
    
        [JsonProperty("id", Required = Required.Always)]
        [Required]
        public Guid Id { get; set; }
    
        public string ToJson() 
        {
            return JsonConvert.SerializeObject(this, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
        
        public static PersonNotFoundException FromJson(string data)
        {
            return JsonConvert.DeserializeObject<PersonNotFoundException>(data, new JsonConverter[] { new Newtonsoft.Json.Converters.StringEnumConverter() });
        }
    }
    
    [GeneratedCode("NJsonSchema", "5.19.6171.28316")]
    internal class JsonInheritanceConverter : JsonConverter
    {
        internal static readonly string DefaultDiscriminatorName = "discriminator";
    
        private readonly string _discriminator;
            
        [ThreadStatic]
        private static bool _isReading;
    
        [ThreadStatic]
        private static bool _isWriting;
    
        public JsonInheritanceConverter()
        {
            _discriminator = DefaultDiscriminatorName;
        }
    
        public JsonInheritanceConverter(string discriminator)
        {
            _discriminator = discriminator;
        }
    
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            try
            {
                _isWriting = true;
    
                var jObject = JObject.FromObject(value, serializer);
                jObject.AddFirst(new JProperty(_discriminator, value.GetType().Name));
                writer.WriteToken(jObject.CreateReader());
            }
            finally
            {
                _isWriting = false;
            }
        }
    
        public override bool CanWrite
        {
            get
            {
                if (_isWriting)
                {
                    _isWriting = false;
                    return false; 
                }
                return true;
            }
        }
    
        public override bool CanRead
        {
            get
            {
                if (_isReading)
                {
                    _isReading = false;
                    return false;
                }
                return true;
            }
        }
    
        public override bool CanConvert(Type objectType)
        {
            return true;
        }
    
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var jObject = serializer.Deserialize<JObject>(reader);
            var discriminator = jObject.GetValue(_discriminator).Value<string>();
            var subtype = GetObjectSubtype(objectType, discriminator);
    
            try
            {
                _isReading = true;
                return serializer.Deserialize(jObject.CreateReader(), subtype);
            }
            finally
            {
                _isReading = false;
            }
        }
    
        private Type GetObjectSubtype(Type objectType, string discriminator)
        {
            var knownTypeAttributes = objectType.GetTypeInfo().GetCustomAttributes().Where(a => a.GetType().Name == "KnownTypeAttribute");
            dynamic knownTypeAttribute = knownTypeAttributes.SingleOrDefault(a => IsKnwonTypeTargetType(a, discriminator));
            if (knownTypeAttribute != null)
                return knownTypeAttribute.Type;
    
            var typeName = objectType.Namespace + "." + discriminator;
            return objectType.GetTypeInfo().Assembly.GetType(typeName);
        }
    
        private bool IsKnwonTypeTargetType(dynamic attribute, string discriminator)
        {
            return attribute?.Type.Name == discriminator;
        }
    }

    [GeneratedCode("NSwag", "7.7.6174.25699")]
    public class FileParameter
    {
        public FileParameter(Stream data) 
            : this (data, null)
        {
        }

        public FileParameter(Stream data, string fileName)
        {
            Data = data;
            FileName = fileName;
        }

        public Stream Data { get; private set; }

        public string FileName { get; private set; }
    }
	
    [GeneratedCode("NSwag", "7.7.6174.25699")]
    public class GeoClientException : Exception
    {
        public string StatusCode { get; private set; }

        public byte[] ResponseData { get; private set; }

        public GeoClientException(string message, string statusCode, byte[] responseData, Exception innerException) 
            : base(message, innerException)
        {
            StatusCode = statusCode;
            ResponseData = responseData;
        }

        public override string ToString()
        {
            return string.Format("HTTP Response: n{0}n{1}", Encoding.UTF8.GetString(ResponseData, 0, ResponseData.Length), base.ToString());
        }
    }

    [GeneratedCode("NSwag", "7.7.6174.25699")]
    public class GeoClientException<TResponse> : GeoClientException
    {
        public TResponse Response { get; private set; }

        public GeoClientException(string message, string statusCode, byte[] responseData, TResponse response, Exception innerException) 
            : base(message, statusCode, responseData, innerException)
        {
            Response = response;
        }
    }

    [GeneratedCode("NSwag", "7.7.6174.25699")]
    public class PersonsClientException : Exception
    {
        public string StatusCode { get; private set; }

        public byte[] ResponseData { get; private set; }

        public PersonsClientException(string message, string statusCode, byte[] responseData, Exception innerException) 
            : base(message, innerException)
        {
            StatusCode = statusCode;
            ResponseData = responseData;
        }

        public override string ToString()
        {
            return string.Format("HTTP Response: n{0}n{1}", Encoding.UTF8.GetString(ResponseData, 0, ResponseData.Length), base.ToString());
        }
    }

    [GeneratedCode("NSwag", "7.7.6174.25699")]
    public class PersonsClientException<TResponse> : PersonsClientException
    {
        public TResponse Response { get; private set; }

        public PersonsClientException(string message, string statusCode, byte[] responseData, TResponse response, Exception innerException) 
            : base(message, statusCode, responseData, innerException)
        {
            Response = response;
        }
    }

}